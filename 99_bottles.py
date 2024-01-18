def bottle_song():
    for i in range(99, 0, -1):
        # Use f-strings for string formatting
        bottles_text = " bottle" if i == 1 else " bottles"

        print(f"{i}{bottles_text} of beer on the wall, {i}{bottles_text} of beer.")

        if i > 1:
            print(
                f"Take one down and pass it around, {i - 1}{' bottle' if i - 1 == 1 else ' bottles'} of beer on the wall."
            )
        else:
            print(
                "Take one down and pass it around, no more bottles of beer on the wall."
            )


# Call the function to execute the song
bottle_song()
